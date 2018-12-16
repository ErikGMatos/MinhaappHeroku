function Api(id,hash) {
    var obj = {
        meuId: parseInt(id),
        meuIdSomadez: parseInt(hash) + 10
    };
    return obj;
}

module.exports=Api;