import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Link, Tooltip, Box } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const SocialMediaHandles = ({ id, type }) => {
  const [content, setContent] = useState();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/external_ids?api_key=1d7ae0508105d90d7af9b43e174d4f9d`,
        { cancelToken: cancelToken.token }
      )
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          console.log(error);
        }
      });
    return () => {
      cancelToken.cancel();
    };
  }, [id, type]);

  return (
    <Stack direction="row" spacing={2}>
      {content?.facebook_id === null || !content?.facebook_id.length ? null : (
        <Box>
          <Tooltip title="Visit Facebook" arrow>
            <Link
              href={`https://www.facebook.com/${content?.facebook_id}`}
              target="_blank"
              color="inherit"
              rel="noopener"
            >
              <Facebook sx={{ "&:hover": { color: "#4267B2" } }} />
            </Link>
          </Tooltip>
        </Box>
      )}
      {content?.instagram_id === null ||
      !content?.instagram_id.length ? null : (
        <Box>
          <Tooltip title="Visit Instagram" arrow>
            <Link
              href={`https://www.instagram.com/${content?.instagram_id}`}
              target="_blank"
              color="inherit"
              rel="noopener"
            >
              <Instagram sx={{ "&:hover": { color: "#E1306C" } }} />
            </Link>
          </Tooltip>
        </Box>
      )}
      {content?.twitter_id === null || !content?.twitter_id.length ? null : (
        <Box>
          <Tooltip title="Visit Twitter" arrow>
            <Link
              href={`https://www.twitter.com/${content?.twitter_id}`}
              target="_blank"
              color="inherit"
              rel="noopener"
            >
              <Twitter sx={{ "&:hover": { color: "#1DA1F2" } }} />
            </Link>
          </Tooltip>
        </Box>
      )}
    </Stack>
  );
};

export default SocialMediaHandles;
