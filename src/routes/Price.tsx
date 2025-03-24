import { useQuery } from "@tanstack/react-query";
import { fetchCoinPrice } from "./api";
import styled from "styled-components";

const Box = styled.div`
  background-color: ${(props) => props.theme.boxColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

const P = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;
interface PriceData {
  id:string;
  name:string;
  quotes:{
    USD:{
      price:number;
      volume_24h:number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      ath_price:number;
    }
  }
}

interface CoinProps {
  coinId: string;
}

function Price({ coinId }: CoinProps) {
  const { isLoading, data } = useQuery<PriceData[]>({
    queryKey:["Price", coinId], 
    queryFn:() => fetchCoinPrice(coinId), 
    refetchInterval: 10000,
  });

  console.log("Fetched Data:", data);

  const latestData=data?.[0];
  const usdInfo = latestData?.quotes?.USD;
  const price = usdInfo?.price ?? 0;
  const athprice = usdInfo?.ath_price ?? 0;

  const change24h = usdInfo?.percent_change_24h ?? 0;
  const isUp24h = change24h >= 0;
  const symbol24h = isUp24h ? "▲" : "▼";
  const color24h = isUp24h ? "green" : "red";

  const change7d = usdInfo?.percent_change_7d ?? 0;
  const isUp7d = change7d >= 0;
  const symbol7d = isUp7d ? "▲" : "▼";
  const color7d = isUp7d ? "green" : "red";

  const change30d = usdInfo?.percent_change_30d ?? 0;
  const isUp30d = change30d >= 0;
  const symbol30d = isUp30d ? "▲" : "▼";
  const color30d = isUp30d ? "green" : "red";

  return (
    <Box>
      <Title>Price 💰</Title>
      {isLoading ? (
        <p>Loading Price...</p>
      ) : latestData ? (
        <><div>
            <P>🔹 Current Price : ${price.toLocaleString()}</P>
            <P>🔹 Ath Price : ${athprice.toLocaleString()}</P>
          </div>
          <div>
          <P>
           🔹 24h :{" "}
            <span style={{ color: color24h }}>
              {symbol24h} {change24h.toFixed(2)}%
            </span>
          </P>
          <P>
          🔹 7d :{" "}
            <span style={{ color: color7d }}>
              {symbol7d} {change7d.toFixed(2)}%
            </span>
          </P>
          <P>
          🔹 30d :{" "}
            <span style={{ color: color30d }}>
              {symbol30d} {change30d.toFixed(2)}%
            </span>
          </P>
          </div>
          </>
      ) : (
        <p>No Data Available</p>
      )}
    </Box>
  );
}

export default Price;