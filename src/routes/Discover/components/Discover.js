import React, { useContext, useEffect } from "react";
import DiscoverBlock from "../../../common/components/DiscoverBlock/DiscoverBlock";
import { AppContext } from "../../../state";
import "../styles/_discover.scss";
import api from "../../../config";
import axios from "axios";
import QueryString from "qs";

export const Discover = () => {
  const [state, dispatch] = useContext(AppContext);

  const getNewReleases = async (accessToken) => {
    await axios
      .get(`${api.baseUrl}/browse/new-releases`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        dispatch({
          type: "SET_NEW_RELEASES",
          payload: response.data.albums.items,
        });
      });
  };

  const getAuth = async () => {
    try {
      const auth_token = Buffer.from(
        `${api.clientId}:${api.clientSecret}`,
        "utf-8"
      ).toString("base64");
      const data = QueryString.stringify({ grant_type: "client_credentials" });

      await axios
        .post(api.authUrl, data, {
          headers: {
            Authorization: `Basic ${auth_token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          getNewReleases(response.data.access_token);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={state.newReleases ? state.newReleases : []}
      />
    </div>
  );
};

export default Discover;
