import { RowID, RowElement } from "./interface";

declare function deleteRow(rowId: RowID);
declare function insertRow(row: RowElement);
declare function updateRow(rowId: RowID, row: RowElement);