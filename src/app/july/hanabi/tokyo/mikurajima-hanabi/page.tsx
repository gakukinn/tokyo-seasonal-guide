/**
 * 第五层页面 - mikurajima-hanabi详情
 * @layer 五层 (Detail Layer)
 * @month 7月
 * @region 东京
 * @event mikurajima-hanabi
 * @type 花火详情页面
 * @path /july/hanabi/tokyo/mikurajima-hanabi
 * @description mikurajima-hanabi完整详情信息，包含交通、观赏、历史等
 */
import HanabiDetailTemplate from '@/components/HanabiDetailTemplate';
import { mikurajimaHanabiData } from '@/data/level5-july-hanabi-mikurajima';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '御藏岛花火大会 - 东京花火指南',
  description: '御藏岛花火大会详细信息。大自然环绕的御藏岛港举办的独特花火大会，约802发花火在满天星空下绽放。',
  keywords: '御藏岛花火大会,东京花火,御藏岛港,离岛花火,满天星空',
};

export default function MikurajimaHanabiPage() {
  return (
    <HanabiDetailTemplate 
      data={mikurajimaHanabiData} 
      regionKey="tokyo"
    />
  );
} 