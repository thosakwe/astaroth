import AstNode from "./node";

abstract class Statement implements AstNode {
    abstract buildAst(es6: boolean): {};
}

export default Statement;