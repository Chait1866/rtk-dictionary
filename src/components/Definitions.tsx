import {
  Stack,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useGetMeaningsQuery } from "../store/queries";

interface DefinitionsProp {
  word: string;
}

export function Definitions({ word }: DefinitionsProp) {
  console.log(word);
  const { data, isFetching } = useGetMeaningsQuery(word);
  return (
    <Stack
      direction="column"
      gap={2}
      alignItems="center"
      justifyContent="center"
    >
      {!isFetching ? (
        word &&
        data?.map((x, index) => {
          {
            return (
              x.definition && (
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ width: "800px", borderColor: "blue" }}
                >
                  <CardContent>
                    <Typography variant="h5" fontStyle="oblique">
                      Definition:
                    </Typography>
                    <Typography variant="h6" fontStyle="italic">
                      {x.definition}
                    </Typography>
                    {x.example && (
                      <>
                        <Typography variant="h5" fontStyle="oblique">
                          Usage:{" "}
                        </Typography>
                        <Typography variant="h6" fontStyle="italic">
                          {x.example}
                        </Typography>
                      </>
                    )}
                  </CardContent>
                </Card>
              )
            );
          }
        })
      ) : (
        <Box
          height={100}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      )}
    </Stack>
  );
}
