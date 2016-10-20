# Requirements
Live under a directory configurable at startup => have a setDir() method
Store each object resource into a file with identifier as filename => how to establish unique identifier?

## API
```filestore.setDir(data_dir);```
```filestore.store(id, obj, callback(err, rtnId);```
```filestore.get(id, callback(err, obj));```
```filestore.getCollection(id_array, callback(err, obj_array));```
