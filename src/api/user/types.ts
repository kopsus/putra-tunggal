type TypeRole = {
  id?: string;
  role?: "Admin" | "User" | "Dokter";
};

type TypeUser = {
  id?: string;
  roleId?: string;
  email?: string;
  namaLengkap?: string;
  alamat?: string;
  noTlp?: string;
  jenis_kelamin?: string;
  tanggal_lahir?: string;
  foto?: string;
  role?: TypeRole;
};

export type { TypeUser };
