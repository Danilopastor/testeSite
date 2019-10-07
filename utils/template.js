const fs = require('fs');
const path = require('path')
const vars = {
    TITLE : "Brand",
    HOME: "/",
}
module.exports = {
    async index( req , res){

        const { file } = req.params;
        response_file = (file === undefined) ? 'index' : file

        await fs.readFile(path.resolve(__dirname,'..','public',`${response_file}.html`), function(err,data){
                if(err) {
                    res.send('Caminho Não existe')
                }
                
                data = (data) ? data.toString() : ''

                for (var key in vars) {
                    rep1 = eval('/%'+key+'%/g'); 
                    data = data.replace(rep1, vars[key]);
                }

                res.end(data)
        })

    }
}