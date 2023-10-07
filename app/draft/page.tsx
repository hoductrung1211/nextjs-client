import Alert from "@/src/components/feedback/Alert";
import Button, { IconButton } from "@/src/components/inputs/Button";

export default function Page() {
    return (
        <div className="h-[2000px] flex flex-col gap-5 items-center justify-center">
            <Alert severity="warning">This is a success alert - check it out!This is a success alert - check it out!This is a success alert - check it out!This is a success alert - check it out!This is a success alert - check it out!</Alert>
            <Button endIcon="pen-to-square" disabled>Edit</Button>
            <IconButton icon="xmark"  />
            <IconButton icon="xmark" size="sm" />
            <IconButton icon="trash" size="md" />
            <IconButton icon="trash" size="lg" />
        </div>
    )
}