# Requirements
Live under a directory configurable at startup => have a setDir() method

Store each object resource into a file with identifier as filename => how to establish unique identifier?

## API

```
filestore.setDir(data_dir);
```

Sets the data_dir which will be used on subsequent store and get calls.

```
filestore.store(id, obj, callback(err, rtnId);
```

Stores an object ```obj``` at id ```id```. The callback returns an error if unsuccessful, or the id if successful.

```
filestore.get(id, callback(err, obj));
```

```
filestore.getCollection(id_array, callback(err, obj_array));
```
