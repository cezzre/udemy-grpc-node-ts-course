# USAGE: gen.sh PATH(s)
# PATH: project path which contains a proto directory and
#   a .proto named after the project (eg: blog, blog.proto)
#   and optionally some other .proto files

argc=$#
argv=("$@")

for (( j = 0; j < argc; ++j )); do
  protos=`find ${argv[j]}/proto/ -type f -name "*.proto" -not -path "${argv[j]}/proto/${argv[j]}.proto"`

  grpc_tools_node_protoc                                          \
    -I ${argv[j]}/proto/                                          \
    --js_out=import_style=commonjs:${argv[j]}/proto/              \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:${argv[j]}/proto/ \
  $protos;

  grpc_tools_node_protoc                                          \
    -I ${argv[j]}/proto/                                          \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts      \
    --grpc_out=grpc_js:${argv[j]}/proto/                          \
    --js_out=import_style=commonjs:${argv[j]}/proto/              \
    --ts_out=grpc_js:${argv[j]}/proto/                            \
  $protos;

done
