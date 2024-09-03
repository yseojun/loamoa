import React, { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const GraphContainer = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const ColorLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 10px;
`;

const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 3px;
`;

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#a4de6c", "#d0ed57"];

const getColor = (index: number): string => COLORS[index % COLORS.length];

interface Result {
  id: number;
  results: number[];
}

interface CalculationResultGraphProps {
  results: Result[];
}

interface DataPoint {
  backAttackRate: number;
  [key: string]: number; // 인덱스 시그니처 추가
}

const CalculationResultGraph: React.FC<CalculationResultGraphProps> = ({ results }) => {
  const data: DataPoint[] = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      backAttackRate: (i + 1) * 10,
      ...results.reduce<Record<string, number>>((acc, result) => {
        acc[`세팅${result.id}`] = result.results[i + 1] || 0; // undefined 방지
        return acc;
      }, {}),
    }));
  }, [results]);

  const minValue = useMemo(() => {
    const allValues = data.flatMap((entry) => results.map((result) => entry[`세팅${result.id}`] as number));
    return Math.min(...allValues);
  }, [data, results]);

  const yAxisDomain = useMemo(() => {
    const buffer = minValue * 0.01;
    return ([dataMin, dataMax]: [number, number]): [number, number] => {
      return [Math.floor(dataMin - buffer), dataMax];
    };
  }, [minValue]);

  return (
    <GraphContainer>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="backAttackRate" label={{ value: "백어택 확률 (%)", position: "insideBottom", offset: -10 }} />
          <YAxis label={{ value: "데미지", position: "insideLeft", angle: -90, offset: 10 }} domain={yAxisDomain} tick={false} />
          <Tooltip />
          {results.map((result, index) => (
            <Line key={result.id} type="monotone" dataKey={`세팅${result.id}`} stroke={getColor(index)} activeDot={{ r: 8 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <ColorLegend>
        {results.map((result, index) => (
          <LegendItem key={result.id}>
            <ColorBox style={{ backgroundColor: getColor(index) }} />
            <span>세팅 {result.id}</span>
          </LegendItem>
        ))}
      </ColorLegend>
    </GraphContainer>
  );
};

export default CalculationResultGraph;
