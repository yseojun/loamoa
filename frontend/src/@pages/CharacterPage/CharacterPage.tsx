import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import EquipmentDisplay from "./EquipmentDisplay"; // 새로 만든 컴포넌트를 import
import { Tooltip } from "recharts";

const CharacterContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CharacterName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const CharacterInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const CharacterImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-right: 2rem;
`;

const CharacterDetails = styled.div`
  font-size: 1.2rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatItem = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
`;

const StatName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #555;
`;

const StatValue = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const LoadingMessage = styled.div`
  font-size: 1.2rem;
  color: #666;
`;

const ErrorMessage = styled.div`
  font-size: 1.2rem;
  color: #ff0000;
`;

const JsonDisplay = styled.pre`
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin-top: 2rem;
`;

interface CharacterInfo {
  [key: string]: any;
}

interface Equipment {
  Type: string;
  Name: string;
  Tier: number | null;
  Grade: string;
  Level: number | null;
  Quality: number | null;
}

const CharacterPage: React.FC = () => {
  const { characterName } = useParams<{ characterName: string }>();
  const [armoryProfile, setArmoryProfile] = useState<CharacterInfo | null>(null);
  const [armoryEquipment, setArmoryEquipment] = useState<Equipment[]>([]);
  const [armorySkills, setArmorySkills] = useState<CharacterInfo | null>(null);
  const [armoryEngraving, setArmoryEngraving] = useState<CharacterInfo | null>(null);
  const [armoryCard, setArmoryCard] = useState<CharacterInfo | null>(null);
  const [armoryGem, setArmoryGem] = useState<CharacterInfo | null>(null);
  const [arkPassive, setArkPassive] = useState<CharacterInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const processArmoryProfile = (data: any) => {
    const { CharacterName, ItemMaxLevel, CharacterImage, CharacterClassName, Stats } = data;
    return {
      CharacterName,
      CharacterImage,
      CharacterClassName,
      ItemMaxLevel,
      Stats,
    };
  };

  const processArmoryEquipment = (data: any[]): Equipment[] => {
    return data.map((item) => ({
      Type: item.Type,
      Icon: item.Icon,
      Name: item.Name,
      Tier: item.Tier ? parseInt(item.Tier) : null,
      Grade: item.Grade,
      Level: item.Level ? parseInt(item.Level) : null,
      Quality: item.Quality ? parseInt(item.Quality) : null,
    }));
  };

  const processArmorySkills = (data: any[]) => {
    return data.map((skill) => ({
      Name: skill.Name,
      Level: parseInt(skill.Level),
      Type: skill.Type,
      IsAwakening: skill.IsAwakening,
      Tripods: skill.Tripods.map((tripod: any) => ({
        Name: tripod.Name,
        Tier: parseInt(tripod.Tier),
        Level: parseInt(tripod.Level),
      })),
      Tooltip: skill.Tooltip,
      // 추가적인 정제가 필요한 경우 여기에 추가
    }));
  };

  const processArmoryEngraving = (data: any) => {
    return {
      Engravings: data.Engravings.map((engraving: any) => ({
        Name: engraving.Name,
        Icon: engraving.Icon,
        Slot: parseInt(engraving.Slot),
      })),
      Effects: data.Effects.map((effect: any) => ({
        Name: effect.Name,
        Description: effect.Description,
      })),
    };
  };

  const processArmoryCard = (data: any) => {
    return {
      Cards: data.Cards.map((card: any) => ({
        Name: card.Name,
        Grade: card.Grade,
        AwakeCount: parseInt(card.AwakeCount),
        AwakeTotal: parseInt(card.AwakeTotal),
      })),
      Effects: data.Effects.map((effect: any) => ({
        Items: effect.Items,
        Description: effect.Description,
      })),
    };
  };

  const processArmoryGem = (data: any) => {
    return {
      Gems: data.Gems.map((gem: any) => ({
        Slot: parseInt(gem.Slot),
        Name: gem.Name,
        Grade: gem.Grade,
        Level: parseInt(gem.Level),
        Icon: gem.Icon,
      })),
      Effects: data.Effects.map((effect: any) => ({
        GemSlot: parseInt(effect.GemSlot),
        Name: effect.Name,
        Description: effect.Description,
        Icon: effect.Icon,
      })),
    };
  };

  const processArkPassive = (data: any[]) => {
    return data.map((passive) => ({
      Name: passive.Name,
      Level: parseInt(passive.Level),
      Description: passive.Description,
      Icon: passive.Icon,
    }));
  };

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const jwtToken = import.meta.env.VITE_JWT_TOKEN;
        const apiUrl = `https://developer-lostark.game.onstove.com/armories/characters/${characterName}?filters=profiles%2Bequipment%2Bavatars%2Bcombat-skills%2Bengravings%2Bcards%2Bgems%2Barkpassive`;

        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `bearer ${jwtToken}`,
          },
        });

        const data = response.data;
        setArmoryProfile(processArmoryProfile(data.ArmoryProfile));
        setArmoryEquipment(data.ArmoryEquipment);
        setArmorySkills(data.ArmorySkills);
        // setArmoryEngraving(processArmoryEngraving(data.ArmoryEngraving));
        // setArmoryCard(processArmoryCard(data.ArmoryCard));
        // setArmoryGem(processArmoryGem(data.ArmoryGem));
        // setArkPassive(processArkPassive(data.ArkPassive));
      } catch (err) {
        setError("Failed to fetch character information. Please try again later.");
        console.error("Error fetching character info:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (characterName) {
      fetchCharacterInfo();
    }
  }, [characterName]);

  if (isLoading) {
    return <LoadingMessage>Loading character information...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!armoryProfile) {
    return <ErrorMessage>No character information found.</ErrorMessage>;
  }

  return (
    <CharacterContainer>
      <CharacterName>{armoryProfile.CharacterName}</CharacterName>
      <CharacterInfo>
        <CharacterImage src={armoryProfile.CharacterImage} alt={armoryProfile.CharacterName} />
        <CharacterDetails>
          <p>Class: {armoryProfile.CharacterClassName}</p>
          <p>Item Level: {armoryProfile.ItemMaxLevel}</p>
        </CharacterDetails>
      </CharacterInfo>
      <StatsContainer>
        {armoryProfile.Stats.map((stat: any, index: number) => (
          <StatItem key={index}>
            <StatName>{stat.Type}</StatName>
            <StatValue>{stat.Value}</StatValue>
          </StatItem>
        ))}
      </StatsContainer>
      <h2>Main Equipment</h2>
      <EquipmentDisplay equipment={armoryEquipment} />
      <JsonDisplay>
        {JSON.stringify(
          {
            // ArmoryProfile: armoryProfile,
            ArmoryEquipment: armoryEquipment,
            ArmorySkills: armorySkills,
            // ArmoryEngraving: armoryEngraving,
            // ArmoryCard: armoryCard,
            // ArmoryGem: armoryGem,
            // ArkPassive: arkPassive,
          },
          null,
          2
        )}
      </JsonDisplay>
    </CharacterContainer>
  );
};

export default CharacterPage;
