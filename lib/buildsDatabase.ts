import dexie from "dexie";

const buildsDB = new dexie("buildsDB");

buildsDB.version(2).stores({
    builds: "++id, type, characterId, level, normal, elemental, burst, completed",
});

export default buildsDB as any;
