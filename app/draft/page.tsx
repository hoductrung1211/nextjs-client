'use client';
import Alert, { AlertSeverity } from "@/src/components/feedback/Alert";
import Button, { IconButton } from "@/src/components/inputs/Button";
import useAlert from "@/src/hooks/useAlert";
import Table from "@/src/layouts/Table";

export default function Page() {

    return (
        <TableDraft />
    )
}

function AlertDraft() {
    const [setShowAlert, setAlert] = useAlert();
    return (
        <div className="h-screen flex flex-col gap-5 items-center justify-center">
            <Alert severity={AlertSeverity.info}>This is a success alert - check it out!This is a success alert - check it out!This is a success alert - check it out!This is a success alert - check it out!This is a success alert - check it out!</Alert>
            <Button
                endIcon="pen-to-square"
                onClick={() => {
                    setAlert({
                        message: "hello world",
                    });
                    setShowAlert(true);
                }}
            >Edit</Button>
            <IconButton icon="xmark"  />
            <IconButton icon="xmark" size="sm" />
            <IconButton icon="trash" size="md" />
            <IconButton icon="trash" size="lg" />
        </div>
    )
}

function TableDraft() {
    return (
        <Table>

        </Table>
    )
}