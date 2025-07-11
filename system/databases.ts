import { Database } from "bun:sqlite";
import configTable from "./resources/tables.json";
import Console from "./terminal";

export function createTables() {
  const db = new Database("system/resources/questly.db", { create: true });

  configTable.map((tb) => {
    let columns: string[] = [];
    const finishColumn = tb.columns.length - 1;

    tb.columns.map((col, index) => {
      const type = col.type.toUpperCase();
      const isNull = col.null ? "" : "NOT NULL";
      const comma = index === finishColumn ? "" : ",";
      columns.push(`${col.column} ${type} ${isNull} ${comma}`);
    });

    const baseTemplate = `CREATE TABLE IF NOT EXISTS [${
      tb.table
    }](${columns.join(" ")})`;

    db.run(baseTemplate);

    Console({ name: "📊 Tabla Creada", value: tb.table });
  });

  db.close();

  Console({ name: "✅ Base de Datos", value: "Tablas creadas correctamente" });
}

export function get() {
  const db = new Database("questly.db");
  const result = db.query("SELECT * FROM ques").all();
  db.close();
  return result;
}

const DatabaseSystem = {
  createTables,
  get,
};

export default DatabaseSystem;
