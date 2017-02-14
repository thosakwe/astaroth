import AstNode from "./node";

export default class Function implements AstNode {
    id:Identifier = null;
    params:Pattern[] = [];
    defaults:Expression[] = [];
    rest:Identifier = null;
    body: BlockStatement | Expression = null;
    generator:boolean;
    expression:boolean;
}