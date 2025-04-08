import { Spinner } from "react-bootstrap";

function Loading() {
    return (
        <div className='w-100 d-flex justify-content-center align-content-center'>
          <Spinner />
        </div>
    );
}

export default Loading;