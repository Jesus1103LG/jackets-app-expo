import { createContext, useContext, useEffect, useState } from "react";
import { createTables, getDbConnection } from "../utils/db";
import { Text } from "react-native";

const DbContext = createContext();

export function useDbContext() {
  return useContext(DbContext);
}

export function DbContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [db, setDb] = useState(null);

  useEffect(() => {
    let _db = null;
    async function getConnection() {
      _db = await getDbConnection();
      await createTables(_db);
      setDb(_db);
      setIsLoading(false);
    }
    getConnection();
    return function () {
      if (_db !== null) {
        _db.close();
      }
    };
  }, []);

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return <DbContext.Provider value={db}>{children}</DbContext.Provider>;
}
