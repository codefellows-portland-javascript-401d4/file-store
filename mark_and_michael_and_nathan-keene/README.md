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

Gets an object at ```id```. The callback returns an error if unsuccessful, or the object ```obj``` if successful.

```
filestore.getCollection(id_array, callback(err, obj_array));
```

Gets an array of objects specified by the ids ```id_array```. The callback returns an error if unsuccessful, and an array of objects ```obj_array``` *in the order of the ids in* ```id_array```.
