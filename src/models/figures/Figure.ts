import logo from '../../assets/black-king.png';
import { Cell } from "../Cell";
import { Colors } from '../Colors';


export enum FigureNames {
    FIGURE = "Figuren",
    KING = "König",
    KNIGHT = "Springer",
    PAWN = "Bauer",
    QUEEN = "Dame",
    ROOK = "Turm",
    BISHOP = "Läufer"
}


export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;


    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }


    canMove(target: Cell): boolean {
        return true
    }


    moveFigure(target: Cell) {

    }
}