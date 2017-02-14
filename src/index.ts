import AstNode from "./nodes/node";
import Statement from "./nodes/statement";

export default class Program implements AstNode {
    body: Statement[] = [];

    buildAst(es6: boolean):{} {
        return {
            type: 'Program',
            body: this.body.map(stmt => stmt.buildAst(es6))
        };
    }
}