const getAluno = async (params) => {
    let aluno = {}
    if (params.name === "Iuri") {
        aluno.id = 16105
        aluno.nome = "Iuri"
        aluno.sobrenome = "Pagnussat"
        aluno.notas = []
        aluno.notas.push(10)
        aluno.notas.push(9)
    } else {
        throw "Aluno não cadastrado!"
    }
    return aluno
}

module.exports.getAluno = getAluno