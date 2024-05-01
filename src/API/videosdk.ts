//This is the Auth token, you will use it to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjNzQ3ODZlZi0yNTQwLTQ3MjEtOTNmNC0xY2UwZGFkY2JkOTciLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNDQ0OTIwOSwiZXhwIjoxNzE1MDU0MDA5fQ.XsabgjJ1v87P7ORbDIEi6o5UEJHQjepZVnF13ypOcR8";
// API call to create a meeting
export const createMeeting = async ({ token }: { token: string }) => {
    const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
      method: "POST",
      headers: {
        authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};