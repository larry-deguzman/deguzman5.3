import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const ENDPOINT = "https://deguzman5.com/api/counter.php";
const SESSION_KEY = "counterHit";

const HiddenCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  // Count once per browser session; later loads only read the value.
  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem(SESSION_KEY) === "1";
    fetch(ENDPOINT, {
      method: alreadyCounted ? "GET" : "POST",
      headers: { Accept: "application/json" },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((json) => {
        sessionStorage.setItem(SESSION_KEY, "1");
        setCount(Number(json.count));
      })
      .catch(() => setCount(null));
  }, []);

  // Shift + Command + . (period) toggles visibility
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.metaKey && e.code === "Period") {
        e.preventDefault();
        setVisible((v) => !v);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Flex
      position="fixed"
      bottom="20px"
      right="20px"
      alignItems="center"
      gap="8px"
      zIndex={1000}
    >
      {visible && (
        <Text color="white" fontSize="sm">
          Visits: {count === null ? "unavailable" : count.toLocaleString()}
        </Text>
      )}
      <Box
        as="button"
        type="button"
        aria-label="Toggle visit counter"
        onClick={() => setVisible((v) => !v)}
        w="2px"
        h="2px"
        bg="argb(255, 255, 255, 1)"
        cursor="pointer"
      />
    </Flex>
  );
};

export default HiddenCounter;
