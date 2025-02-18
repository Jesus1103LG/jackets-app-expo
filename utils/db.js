import { enablePromise, openDatabase } from "react-native-sqlite-storage";

enablePromise(true);

const DATABASE_NAME = "jackets_app.db";

export async function getDbConnection() {
  const db = await openDatabase({ name: DATABASE_NAME, location: "default" });
  return db;
}

export async function createTables(db) {
  const query = `
    CREATE TABLE IF NOT EXISTS carrera (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre varchar(50) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS persona (
      cedula varchar(9) PRIMARY KEY,
      nombre1 varchar(50) NOT NULL,
      nombre2 varchar(50),
      apellido1 varchar(50) NOT NULL,
      apellido2 varchar(50),
      apodo varchar(50),
      fecha_nacimiento date NOT NULL,
      chambea boolean NOT NULL defautl 0,
      carrera int NOT NULL,
      foreign key (carrera) references carrera(id)
    );

    CREATE TABLE IF NOT EXISTS imagenes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ruta varchar(255) NOT NULL,
      persona varchar(9) NOT NULL,
      foreign key (persona) references persona(cedula)
    );

    CREATE TABLE IF NOT EXISTS idioma (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre varchar(50) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS configuracion (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      darck_mode boolean NOT NULL default 0,
      font_size int NOT NULL default 16,
      idioma int NOT NULL,
      foreign key (idioma) references idioma(id)
    );
  `;

  return db.executeSql(query);
}

export async function initDatabase() {
  const db = await getDbConnection();
  await createTables(db);
  db.close();
}
