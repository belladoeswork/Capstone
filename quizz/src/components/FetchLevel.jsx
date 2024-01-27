export default function FetchLevel({ level, score }) {
  async function handleLevelClick(level) {
    const user = await fetchUser();
    const response = await fetch(`/api/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        level,
      }),
    });
    router.refresh();
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          backgroundColor: "#F2F5FF",
          flexDirection: "row",
          gap: "100px",
          fontSize: "30px",
        }}
      >
        <h2>
          Score: <span style={{ color: "#2274a5" }}>{score}</span>
        </h2>
        <h2>
          Level:
          <span style={{ color: "#2274a5" }}>{handleLevelClick(level)}</span>
        </h2>
      </div>
    </div>
  );
}
