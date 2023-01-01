import { Alert } from "react-bootstrap";

export default function FeedbackAlert(props) {
    return (
        <>
            <Alert variant={props.variant} className="text-center">
                {props.message}
            </Alert>
        </>
    )
}