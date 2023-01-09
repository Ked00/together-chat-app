import { Alert } from "react-bootstrap";

export function FeedbackAlert(props) {
    return (
        <>
            <Alert variant={props.variant} className="text-center">
                {props.message}
            </Alert>
        </>
    )
}