# Collection of things that has shown itself to be handy

## Unix Utilities

[`lsof`](http://www.catonmat.net/blog/unix-utilities-lsof/) - files opened by processes

[`nc`](http://www.catonmat.net/blog/unix-utilities-netcat/) - any networking debugging

## Collectd
Is the `networking` module sending data? And to where?
```
$ tcpdump -i eth0 -p -n -s 1500 udp port 25826
12:28:50.760465 IP 10.0.1.190.43468 > 10.0.250.38.25826: UDP, length 1370
12:28:50.760895 IP 10.0.1.190.43468 > 10.0.250.38.25826: UDP, length 1355
12:28:50.761848 IP 10.0.1.190.43468 > 10.0.250.38.25826: UDP, length 1369
```

## ElasticSearch

### Restore Index
```
POST _snapshot/falcon.listen.es.snapshots/<snapshot>/_restore
{
  "indices": "<index>",
  "include_aliases": true,
  "include_global_state": false
}
```
