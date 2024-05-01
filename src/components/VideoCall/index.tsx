import { useState } from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "../../API/videosdk";
import JoinScreen from "../JoinScreen";
import MeetingView from "../MeetingView";

function VideoCall(): any {
    const [meetingId, setMeetingId] = useState<string | null>(null);

    //Getting the meeting id by calling the api we just wrote
    const getMeetingAndToken = async (id?: string) => {
        const meetingId =
            id == null ? await createMeeting({ token: authToken }) : id;
        setMeetingId(meetingId);
    };

    //This will set Meeting Id to null when meeting is left or ended
    const onMeetingLeave = () => {
        setMeetingId(null);
    };

    return (authToken && meetingId) ?
        <MeetingProvider
            config={{
                meetingId,
                micEnabled: true,
                webcamEnabled: true,
                name: "C.V. Raman",
                debugMode: false
            }}
            token={authToken}
        >
            <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
        </MeetingProvider>
        :
        <JoinScreen getMeetingAndToken={getMeetingAndToken} />
        ;
}

export default VideoCall;