
interface ITableProps {
    columns: IColumn[]
}
export default function Table({

}) {
    return (
        <table className="">

        </table>
    )
}

interface IColumn {
    field: string,
    headerName: string,
}