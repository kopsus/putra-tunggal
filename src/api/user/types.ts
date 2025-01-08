type TypeRole = {
  id?: string;
  role?: "Admin" | "User" | "Dokter";
};

type TypeService = {
  id?: string;
  namaService?: string;
  harga?: number;
  dokterId?: string;
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
  password?: string;
  role?: TypeRole;
  Service?: TypeService[];
};

export type { TypeUser, TypeRole };
