// Type definitions for pouchdb v6.1.2
// Project: https://pouchdb.com/
// Definitions by: Andy Brown <https://github.com/AGBrown>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types='pouchdb-adapter-fruitdown' />
/// <reference types='pouchdb-adapter-http' />
/// <reference types='pouchdb-adapter-idb' />
/// <reference types='pouchdb-adapter-leveldb' />
/// <reference types='pouchdb-adapter-localstorage' />
/// <reference types='pouchdb-adapter-memory' />
/// <reference types='pouchdb-adapter-node-websql' />
/// <reference types='pouchdb-adapter-websql' />
/// <reference types='pouchdb-browser' />
/// <reference types='pouchdb-core' />
/// <reference types='pouchdb-http' />
/// <reference types='pouchdb-mapreduce' />
/// <reference types='pouchdb-node' />
/// <reference types='pouchdb-replication' />

declare module 'pouchdb' {
    const plugin: PouchDB.Static;
    export = plugin;
}
