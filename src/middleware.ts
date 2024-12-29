import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Daftar rute
const privateRoutesAdmin = ["/dashboard"];
const privateRoutesUser = ["/profile"];
const authRoutes = ["/login", "/register"];
const publicRoutes = ["/article", "/service", "/about"];

export async function middleware(request: NextRequest) {
  const cookie = (await cookies()).get("accessToken"); // Ambil token dari cookies
  const url = request.nextUrl.clone(); // Clone URL agar bisa dimodifikasi
  const token = cookie ? cookie.value : null;

  if (token) {
    const decoded: any = jwt.decode(token);

    // Jika user memiliki token denga role === Masyarakat mencoba mengakse privateRoutesAdmin, redirect ke "/"
    if (
      decoded?.role === "Masyarakat" &&
      privateRoutesAdmin.some((route) => url.pathname.startsWith(route))
    ) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    if (
      decoded?.role !== "Masyarakat" &&
      publicRoutes.some((route) => url.pathname.startsWith(route))
    ) {
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }

    // Jika user memiliki token dan mencoba mengakses halaman login/register, redirect ke "/"
    if (authRoutes.some((route) => url.pathname.startsWith(route))) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  } else {
    // Jika tidak ada token dan mengakses private routes, redirect ke /login
    if (
      privateRoutesAdmin.some((route) => url.pathname.startsWith(route)) ||
      privateRoutesUser.some((route) => url.pathname.startsWith(route))
    ) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next(); // Lanjutkan ke halaman yang diminta
}

export const config = {
  matcher: [
    // public routes
    "/",
    "/article",
    "/service",
    "/about",
    // auth routes
    "/login",
    "/register",
    // privateRoutesMasyarakat
    "/profile",
    // privateRoutesAdmin
    "/dashboard",
  ],
};
