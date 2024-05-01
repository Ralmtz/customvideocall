import { useState } from "react";
import { authToken } from "../../API/videosdk";

function JoinScreenView({ getMeetingAndToken }: { getMeetingAndToken: (meeting?: string) => void; }) {
    const [meetingId, setMeetingId] = useState<string | undefined>();
    const onClick = async () => {
        getMeetingAndToken(meetingId);
    };

    const deactivateRoom = async () => {
        const options = {
            method: "POST",
            headers: {
                "Authorization": authToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "roomId": "5tx5-gigg-ppxg"
            }),
        };
        const url = `https://api.videosdk.live/v2/rooms/deactivate`;
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Enter Meeting Id"
                onChange={(e) => {
                    setMeetingId(e.target.value);
                }}
            />
            <button onClick={onClick}>Join</button>
            {/* <button onClick={deactivateRoom}>Join</button> */}
            {" or "}
            <button onClick={onClick}>Create Meeting</button>
        </>
    );
}

export default JoinScreenView;