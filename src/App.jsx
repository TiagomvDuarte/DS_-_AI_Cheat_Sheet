import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Moon, Sun, BookOpen } from 'lucide-react';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import PfDS from './pages/PfDS/PfDS.jsx';
import PfDS1 from './pages/PfDS/PfDS1';
import PfDS2 from './pages/PfDS/PfDS2';
import PfDS3 from './pages/PfDS/PfDS3';
import PfDS4 from './pages/PfDS/PfDS4';
import PfDS5 from './pages/PfDS/PfDS5';
import PfDS6 from './pages/PfDS/PfDS6';
import PfDS7 from './pages/PfDS/PfDS7';
import PfDS10 from './pages/PfDS/PfDS10';
import PfDS11 from './pages/PfDS/PfDS11';
import PfDS12 from './pages/PfDS/PfDS12';
import LinAlg from './pages/LinAlg/LinAlg.jsx';
import LA1 from './pages/LinAlg/LA1';
import LA2 from './pages/LinAlg/LA2';
import LA3 from './pages/LinAlg/LA3';
import LA4 from './pages/LinAlg/LA4';
import LA5 from './pages/LinAlg/LA5';
import LA6 from './pages/LinAlg/LA6';
import LA7 from './pages/LinAlg/LA7';
import Calculus from './pages/Calculus/Calculus.jsx';
import CALC1 from './pages/Calculus/CALC1';
import CALC2 from './pages/Calculus/CALC2';
import CALC3 from './pages/Calculus/CALC3';
import CALC4 from './pages/Calculus/CALC4';
import CALC5 from './pages/Calculus/CALC5';
import CALC6 from './pages/Calculus/CALC6';
import CALC7 from './pages/Calculus/CALC7';
import CALC8 from './pages/Calculus/CALC8';
import CALC9 from './pages/Calculus/CALC9';
import CALC10 from './pages/Calculus/CALC10';
import PfDS13 from './pages/PfDS/PfDS13';
import DL from './pages/DL/DL.jsx';
import DL1 from './pages/DL/DL1';
import DL2 from './pages/DL/DL2';
import DL3 from './pages/DL/DL3';
import DL4 from './pages/DL/DL4';
import DL5 from './pages/DL/DL5';
import DL6 from './pages/DL/DL6';
import DL8 from './pages/DL/DL8';
import DL12 from './pages/DL/DL12';
import DL13 from './pages/DL/DL13';
import DM13 from './pages/DM/DM13';
import DM15 from './pages/DM/DM15';
import NLP from './pages/NLP/NLP.jsx';
import CloudBigData from './pages/CloudBigData/CloudBigData.jsx';
import BigDataMgmt from './pages/BigData/BigDataMgmt.jsx';
import BigDataAnalytics from './pages/BigDataAnalytics/BigDataAnalytics.jsx';
import BDA1 from './pages/BigDataAnalytics/BDA1';
import BDA2 from './pages/BigDataAnalytics/BDA2';
import BDA3 from './pages/BigDataAnalytics/BDA3';
import BDA4 from './pages/BigDataAnalytics/BDA4';
import BDA5 from './pages/BigDataAnalytics/BDA5';
import CBD1 from './pages/CloudBigData/CBD1';
import CBD2 from './pages/CloudBigData/CBD2';
import CBD3 from './pages/CloudBigData/CBD3';
import CBD4 from './pages/CloudBigData/CBD4';
import CBD5 from './pages/CloudBigData/CBD5';
import CBD6 from './pages/CloudBigData/CBD6';
import CBD7 from './pages/CloudBigData/CBD7';
import CBD8 from './pages/CloudBigData/CBD8';
import BDM1 from './pages/BigData/BDM1';
import BDM2 from './pages/BigData/BDM2';
import BDM3 from './pages/BigData/BDM3';
import BDM4 from './pages/BigData/BDM4';
import BDM5 from './pages/BigData/BDM5';
import BDM6 from './pages/BigData/BDM6';
import BDM7 from './pages/BigData/BDM7';
import CIO from './pages/CIO/CIO.jsx';
import CIO1 from './pages/CIO/CIO1';
import CIO2 from './pages/CIO/CIO2';
import CIO3 from './pages/CIO/CIO3';
import CIO4 from './pages/CIO/CIO4';
import CIO5 from './pages/CIO/CIO5';
import CIO6 from './pages/CIO/CIO6';
import CIO7 from './pages/CIO/CIO7';
import CIO8 from './pages/CIO/CIO8';
import CIO9 from './pages/CIO/CIO9';
import CIO10 from './pages/CIO/CIO10';
import CIO11 from './pages/CIO/CIO11';
import CIO12 from './pages/CIO/CIO12';
import CIO13 from './pages/CIO/CIO13';
import CIO14 from './pages/CIO/CIO14';
import CIO15 from './pages/CIO/CIO15';
import CV from './pages/CV/CV.jsx';
import CV1 from './pages/CV/CV1';
import CV2 from './pages/CV/CV2';
import CV3 from './pages/CV/CV3';
import CV4 from './pages/CV/CV4';
import CV5 from './pages/CV/CV5';
import CV6 from './pages/CV/CV6';
import CV7 from './pages/CV/CV7';
import CV8 from './pages/CV/CV8';
import CV9 from './pages/CV/CV9';
import CV10 from './pages/CV/CV10';
import CV11 from './pages/CV/CV11';
import DV from './pages/DV/DV.jsx';
import DV1 from './pages/DV/DV1';
import DV2 from './pages/DV/DV2';
import DV3 from './pages/DV/DV3';
import DV4 from './pages/DV/DV4';
import DV5 from './pages/DV/DV5';
import DV6 from './pages/DV/DV6';
import DV7 from './pages/DV/DV7';
import DV8 from './pages/DV/DV8';
import DV9 from './pages/DV/DV9';
import DV10 from './pages/DV/DV10';
import ML from './pages/ML/ML.jsx';
import ML1 from './pages/ML/ML1';
import ML2 from './pages/ML/ML2';
import ML3 from './pages/ML/ML3';
import ML4 from './pages/ML/ML4';
import ML5 from './pages/ML/ML5';
import ML6 from './pages/ML/ML6';
import ML7 from './pages/ML/ML7';
import ML8 from './pages/ML/ML8';
import ML9 from './pages/ML/ML9';
import ML10 from './pages/ML/ML10';
import ML11 from './pages/ML/ML11';
import MLOps from './pages/MLOps/MLOps.jsx';
import MLOPS1 from './pages/MLOps/MLOPS1';
import MLOPS2 from './pages/MLOps/MLOPS2';
import MLOPS3 from './pages/MLOps/MLOPS3';
import MLOPS5 from './pages/MLOps/MLOPS5';
import MLOPS6 from './pages/MLOps/MLOPS6';
import NEL from './pages/NEL/NEL.jsx';
import NEL1 from './pages/NEL/NEL1';
import NEL2 from './pages/NEL/NEL2';
import NEL3 from './pages/NEL/NEL3';
import NEL4 from './pages/NEL/NEL4';
import NEL5 from './pages/NEL/NEL5';
import NEL6 from './pages/NEL/NEL6';
import NEL7 from './pages/NEL/NEL7';
import NEL8 from './pages/NEL/NEL8';
import NEL9 from './pages/NEL/NEL9';
import NEL10 from './pages/NEL/NEL10';
import NLP1 from './pages/NLP/NLP1';
import NLP2 from './pages/NLP/NLP2';
import NLP3 from './pages/NLP/NLP3';
import NLP4 from './pages/NLP/NLP4';
import NLP5 from './pages/NLP/NLP5';
import NLP6 from './pages/NLP/NLP6';
import NLP7 from './pages/NLP/NLP7';
import NLP8 from './pages/NLP/NLP8';
import NLP9 from './pages/NLP/NLP9';
import Statistics from './pages/Statistics/Statistics.jsx';
import ST1 from './pages/Statistics/ST1';
import ST2 from './pages/Statistics/ST2';
import ST3 from './pages/Statistics/ST3';
import ST4 from './pages/Statistics/ST4';
import ST5 from './pages/Statistics/ST5';
import ST6 from './pages/Statistics/ST6';
import ST7 from './pages/Statistics/ST7';
import ST8 from './pages/Statistics/ST8';
import ST9 from './pages/Statistics/ST9';
import ST10 from './pages/Statistics/ST10';
import ST11 from './pages/Statistics/ST11';
import ST12 from './pages/Statistics/ST12';
import ST13 from './pages/Statistics/ST13';
import ST14 from './pages/Statistics/ST14';
import DM from './pages/DM/DM.jsx';
import DM2 from './pages/DM/DM2';
import DM5 from './pages/DM/DM5';
import DM7 from './pages/DM/DM7';
import DM8 from './pages/DM/DM8';
import DM9 from './pages/DM/DM9';
import DM10 from './pages/DM/DM10';
import DM11 from './pages/DM/DM11';
import DM12 from './pages/DM/DM12';
import RL from './pages/RL/RL.jsx';
import RL1 from './pages/RL/RL1';
import RL2 from './pages/RL/RL2';
import RL3 from './pages/RL/RL3';
import RL4 from './pages/RL/RL4';
import RL5 from './pages/RL/RL5';
import RL6 from './pages/RL/RL6';
import RL7 from './pages/RL/RL7';
import RL8 from './pages/RL/RL8';
import RelDB from './pages/RelDB/RelDB.jsx';
import RDB1 from './pages/RelDB/RDB1';
import RDB2 from './pages/RelDB/RDB2';
import RDB3 from './pages/RelDB/RDB3';
import RDB4 from './pages/RelDB/RDB4';
import RDB5 from './pages/RelDB/RDB5';
import RDB6 from './pages/RelDB/RDB6';
import RDB7 from './pages/RelDB/RDB7';
import XAI from './pages/XAI/XAI.jsx';
import XAI1 from './pages/XAI/XAI1';
import XAI2 from './pages/XAI/XAI2';
import XAI3 from './pages/XAI/XAI3';
import XAI4 from './pages/XAI/XAI4';
import XAI5 from './pages/XAI/XAI5';
import XAI6 from './pages/XAI/XAI6';
import XAI7 from './pages/XAI/XAI7';
import LLM from './pages/LLM/LLM.jsx';
import LLM2 from './pages/LLM/LLM2';
import LLM3 from './pages/LLM/LLM3';
import LLM4 from './pages/LLM/LLM4';
import LLM5 from './pages/LLM/LLM5';
import LLM6 from './pages/LLM/LLM6';
import LLM7 from './pages/LLM/LLM7';
import LLM8 from './pages/LLM/LLM8';
import LLM9 from './pages/LLM/LLM9';
import LLM10 from './pages/LLM/LLM10';
import LLM11 from './pages/LLM/LLM11';
import Parallel from './pages/Parallel/Parallel.jsx';
import PAR1 from './pages/Parallel/PAR1';
import PAR2 from './pages/Parallel/PAR2';
import PAR3 from './pages/Parallel/PAR3';
import PAR4 from './pages/Parallel/PAR4';
import PAR5 from './pages/Parallel/PAR5';
import PAR6 from './pages/Parallel/PAR6';
import PAR7 from './pages/Parallel/PAR7';
import PAR8 from './pages/Parallel/PAR8';
import AIEthics from './pages/AIEthics/AIEthics.jsx';
import ETH1 from './pages/AIEthics/ETH1';
import ETH2 from './pages/AIEthics/ETH2';
import ETH3 from './pages/AIEthics/ETH3';
import ETH4 from './pages/AIEthics/ETH4';
import ETH5 from './pages/AIEthics/ETH5';
import ETH6 from './pages/AIEthics/ETH6';
import ETH7 from './pages/AIEthics/ETH7';
import ETH8 from './pages/AIEthics/ETH8';
import EdgeAI from './pages/EdgeAI/EdgeAI.jsx';
import EDG1 from './pages/EdgeAI/EDG1';
import EDG2 from './pages/EdgeAI/EDG2';
import EDG3 from './pages/EdgeAI/EDG3';
import EDG4 from './pages/EdgeAI/EDG4';
import EDG5 from './pages/EdgeAI/EDG5';
import EDG6 from './pages/EdgeAI/EDG6';
import EDG7 from './pages/EdgeAI/EDG7';
import EDG8 from './pages/EdgeAI/EDG8';
import EDG9 from './pages/EdgeAI/EDG9';
import EDG10 from './pages/EdgeAI/EDG10';
import RecommenderSystems from './pages/RecommenderSystems/RecommenderSystems.jsx';
import REC1 from './pages/RecommenderSystems/REC1';
import REC2 from './pages/RecommenderSystems/REC2';
import REC3 from './pages/RecommenderSystems/REC3';
import REC4 from './pages/RecommenderSystems/REC4';
import REC5 from './pages/RecommenderSystems/REC5';
import REC6 from './pages/RecommenderSystems/REC6';
import REC7 from './pages/RecommenderSystems/REC7';
import REC8 from './pages/RecommenderSystems/REC8';
import Logic from './pages/Logic/Logic.jsx';
import LOG1 from './pages/Logic/LOG1';
import LOG2 from './pages/Logic/LOG2';
import LOG3 from './pages/Logic/LOG3';
import LOG4 from './pages/Logic/LOG4';
import LOG5 from './pages/Logic/LOG5';
import LOG6 from './pages/Logic/LOG6';
import LOG7 from './pages/Logic/LOG7';
import SpeechAudio from './pages/SpeechAudio/SpeechAudio.jsx';
import AUD1 from './pages/SpeechAudio/AUD1';
import AUD2 from './pages/SpeechAudio/AUD2';
import AUD3 from './pages/SpeechAudio/AUD3';
import AUD4 from './pages/SpeechAudio/AUD4';
import AUD5 from './pages/SpeechAudio/AUD5';
import AUD6 from './pages/SpeechAudio/AUD6';
import AUD7 from './pages/SpeechAudio/AUD7';
import AUD8 from './pages/SpeechAudio/AUD8';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <Link to="/" className="logo-section" style={{ textDecoration: 'none' }}>
            <BookOpen className="logo-icon" size={32} />
            <div>
              <h1 className="title" style={{ color: 'var(--text-primary)' }}>DS & AI Cheat Sheet</h1>
              <p className="subtitle">Your quick reference for everything data and AI</p>
            </div>
          </Link>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cloud-bigdata" element={<CloudBigData />} />
            <Route path="/bigdata-mgmt" element={<BigDataMgmt />} />
            <Route path="/bigdata-analytics" element={<BigDataAnalytics />} />
            <Route path="/bigdata-analytics/lecture1" element={<BDA1 />} />
            <Route path="/bigdata-analytics/lecture2" element={<BDA2 />} />
            <Route path="/bigdata-analytics/lecture3" element={<BDA3 />} />
            <Route path="/bigdata-analytics/lecture4" element={<BDA4 />} />
            <Route path="/bigdata-analytics/lecture5" element={<BDA5 />} />
            <Route path="/cloud-bigdata/lecture1" element={<CBD1 />} />
            <Route path="/cloud-bigdata/lecture2" element={<CBD2 />} />
            <Route path="/cloud-bigdata/lecture3" element={<CBD3 />} />
            <Route path="/cloud-bigdata/lecture4" element={<CBD4 />} />
            <Route path="/cloud-bigdata/lecture5" element={<CBD5 />} />
            <Route path="/cloud-bigdata/lecture6" element={<CBD6 />} />
            <Route path="/cloud-bigdata/lecture7" element={<CBD7 />} />
            <Route path="/cloud-bigdata/lecture8" element={<CBD8 />} />
            <Route path="/bigdata-mgmt/lecture1" element={<BDM1 />} />
            <Route path="/bigdata-mgmt/lecture2" element={<BDM2 />} />
            <Route path="/bigdata-mgmt/lecture3" element={<BDM3 />} />
            <Route path="/bigdata-mgmt/lecture4" element={<BDM4 />} />
            <Route path="/bigdata-mgmt/lecture5" element={<BDM5 />} />
            <Route path="/bigdata-mgmt/lecture6" element={<BDM6 />} />
            <Route path="/bigdata-mgmt/lecture7" element={<BDM7 />} />
            <Route path="/cio" element={<CIO />} />
            <Route path="/cio/lecture1" element={<CIO1 />} />
            <Route path="/cio/lecture2" element={<CIO2 />} />
            <Route path="/cio/lecture3" element={<CIO3 />} />
            <Route path="/cio/lecture4" element={<CIO4 />} />
            <Route path="/cio/lecture5" element={<CIO5 />} />
            <Route path="/cio/lecture6" element={<CIO6 />} />
            <Route path="/cio/lecture7" element={<CIO7 />} />
            <Route path="/cio/lecture8" element={<CIO8 />} />
            <Route path="/cio/lecture9" element={<CIO9 />} />
            <Route path="/cio/lecture10" element={<CIO10 />} />
            <Route path="/cio/lecture11" element={<CIO11 />} />
            <Route path="/cio/lecture12" element={<CIO12 />} />
            <Route path="/cio/lecture13" element={<CIO13 />} />
            <Route path="/cio/lecture14" element={<CIO14 />} />
            <Route path="/cio/lecture15" element={<CIO15 />} />
            <Route path="/dl" element={<DL />} />
            <Route path="/dl/lecture1" element={<DL1 />} />
            <Route path="/dl/lecture2" element={<DL2 />} />
            <Route path="/dl/lecture3" element={<DL3 />} />
            <Route path="/dl/lecture4" element={<DL4 />} />
            <Route path="/dl/lecture5" element={<DL5 />} />
            <Route path="/dl/lecture6" element={<DL6 />} />
            <Route path="/dl/lecture8" element={<DL8 />} />
            <Route path="/dl/lecture12" element={<DL12 />} />
            <Route path="/dl/lecture13" element={<DL13 />} />
            <Route path="/pfds" element={<PfDS />} />
            <Route path="/pfds/lecture1" element={<PfDS1 />} />
            <Route path="/pfds/lecture2" element={<PfDS2 />} />
            <Route path="/pfds/lecture3" element={<PfDS3 />} />
            <Route path="/pfds/lecture4" element={<PfDS4 />} />
            <Route path="/pfds/lecture5" element={<PfDS5 />} />
            <Route path="/pfds/lecture6" element={<PfDS6 />} />
            <Route path="/pfds/lecture7" element={<PfDS7 />} />
            <Route path="/pfds/lecture10" element={<PfDS10 />} />
            <Route path="/pfds/lecture11" element={<PfDS11 />} />
            <Route path="/pfds/lecture12" element={<PfDS12 />} />
            <Route path="/pfds/lecture13" element={<PfDS13 />} />
            <Route path="/linalg" element={<LinAlg />} />
            <Route path="/linalg/lecture1" element={<LA1 />} />
            <Route path="/linalg/lecture2" element={<LA2 />} />
            <Route path="/linalg/lecture3" element={<LA3 />} />
            <Route path="/linalg/lecture4" element={<LA4 />} />
            <Route path="/linalg/lecture5" element={<LA5 />} />
            <Route path="/linalg/lecture6" element={<LA6 />} />
            <Route path="/linalg/lecture7" element={<LA7 />} />
            <Route path="/calculus" element={<Calculus />} />
            <Route path="/calculus/lecture1" element={<CALC1 />} />
            <Route path="/calculus/lecture2" element={<CALC2 />} />
            <Route path="/calculus/lecture3" element={<CALC3 />} />
            <Route path="/calculus/lecture4" element={<CALC4 />} />
            <Route path="/calculus/lecture5" element={<CALC5 />} />
            <Route path="/calculus/lecture6" element={<CALC6 />} />
            <Route path="/calculus/lecture7" element={<CALC7 />} />
            <Route path="/calculus/lecture8" element={<CALC8 />} />
            <Route path="/calculus/lecture9" element={<CALC9 />} />
            <Route path="/calculus/lecture10" element={<CALC10 />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/cv/lecture1" element={<CV1 />} />
            <Route path="/cv/lecture2" element={<CV2 />} />
            <Route path="/cv/lecture3" element={<CV3 />} />
            <Route path="/cv/lecture4" element={<CV4 />} />
            <Route path="/cv/lecture5" element={<CV5 />} />
            <Route path="/cv/lecture6" element={<CV6 />} />
            <Route path="/cv/lecture7" element={<CV7 />} />
            <Route path="/cv/lecture8" element={<CV8 />} />
            <Route path="/cv/lecture9" element={<CV9 />} />
            <Route path="/cv/lecture10" element={<CV10 />} />
            <Route path="/cv/lecture11" element={<CV11 />} />
            <Route path="/dv" element={<DV />} />
            <Route path="/dv/lecture1" element={<DV1 />} />
            <Route path="/dv/lecture2" element={<DV2 />} />
            <Route path="/dv/lecture3" element={<DV3 />} />
            <Route path="/dv/lecture4" element={<DV4 />} />
            <Route path="/dv/lecture5" element={<DV5 />} />
            <Route path="/dv/lecture6" element={<DV6 />} />
            <Route path="/dv/lecture7" element={<DV7 />} />
            <Route path="/dv/lecture8" element={<DV8 />} />
            <Route path="/dv/lecture9" element={<DV9 />} />
            <Route path="/dv/lecture10" element={<DV10 />} />
            <Route path="/ml" element={<ML />} />
            <Route path="/ml/lecture1" element={<ML1 />} />
            <Route path="/ml/lecture2" element={<ML2 />} />
            <Route path="/ml/lecture3" element={<ML3 />} />
            <Route path="/ml/lecture4" element={<ML4 />} />
            <Route path="/ml/lecture5" element={<ML5 />} />
            <Route path="/ml/lecture6" element={<ML6 />} />
            <Route path="/ml/lecture7" element={<ML7 />} />
            <Route path="/ml/lecture8" element={<ML8 />} />
            <Route path="/ml/lecture9" element={<ML9 />} />
            <Route path="/ml/lecture10" element={<ML10 />} />
            <Route path="/ml/lecture11" element={<ML11 />} />
            <Route path="/mlops" element={<MLOps />} />
            <Route path="/mlops/lecture1" element={<MLOPS1 />} />
            <Route path="/mlops/lecture2" element={<MLOPS2 />} />
            <Route path="/mlops/lecture3" element={<MLOPS3 />} />
            <Route path="/mlops/lecture5" element={<MLOPS5 />} />
            <Route path="/mlops/lecture6" element={<MLOPS6 />} />
            <Route path="/nel" element={<NEL />} />
            <Route path="/nel/lecture1" element={<NEL1 />} />
            <Route path="/nel/lecture2" element={<NEL2 />} />
            <Route path="/nel/lecture3" element={<NEL3 />} />
            <Route path="/nel/lecture4" element={<NEL4 />} />
            <Route path="/nel/lecture5" element={<NEL5 />} />
            <Route path="/nel/lecture6" element={<NEL6 />} />
            <Route path="/nel/lecture7" element={<NEL7 />} />
            <Route path="/nel/lecture8" element={<NEL8 />} />
            <Route path="/nel/lecture9" element={<NEL9 />} />
            <Route path="/nel/lecture10" element={<NEL10 />} />
            <Route path="/nlp" element={<NLP />} />
            <Route path="/nlp/lecture1" element={<NLP1 />} />
            <Route path="/nlp/lecture2" element={<NLP2 />} />
            <Route path="/nlp/lecture3" element={<NLP3 />} />
            <Route path="/nlp/lecture4" element={<NLP4 />} />
            <Route path="/nlp/lecture5" element={<NLP5 />} />
            <Route path="/nlp/lecture6" element={<NLP6 />} />
            <Route path="/nlp/lecture7" element={<NLP7 />} />
            <Route path="/nlp/lecture8" element={<NLP8 />} />
            <Route path="/nlp/lecture9" element={<NLP9 />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/statistics/lecture1" element={<ST1 />} />
            <Route path="/statistics/lecture2" element={<ST2 />} />
            <Route path="/statistics/lecture3" element={<ST3 />} />
            <Route path="/statistics/lecture4" element={<ST4 />} />
            <Route path="/statistics/lecture5" element={<ST5 />} />
            <Route path="/statistics/lecture6" element={<ST6 />} />
            <Route path="/statistics/lecture7" element={<ST7 />} />
            <Route path="/statistics/lecture8" element={<ST8 />} />
            <Route path="/statistics/lecture9" element={<ST9 />} />
            <Route path="/statistics/lecture10" element={<ST10 />} />
            <Route path="/statistics/lecture11" element={<ST11 />} />
            <Route path="/statistics/lecture12" element={<ST12 />} />
            <Route path="/statistics/lecture13" element={<ST13 />} />
            <Route path="/statistics/lecture14" element={<ST14 />} />
            <Route path="/dm" element={<DM />} />
            <Route path="/dm/lecture2" element={<DM2 />} />
            <Route path="/dm/lecture5" element={<DM5 />} />
            <Route path="/dm/lecture7" element={<DM7 />} />
            <Route path="/dm/lecture8" element={<DM8 />} />
            <Route path="/dm/lecture9" element={<DM9 />} />
            <Route path="/dm/lecture10" element={<DM10 />} />
            <Route path="/dm/lecture11" element={<DM11 />} />
            <Route path="/dm/lecture12" element={<DM12 />} />
            <Route path="/dm/lecture13" element={<DM13 />} />
            <Route path="/dm/lecture15" element={<DM15 />} />
            <Route path="/rl" element={<RL />} />
            <Route path="/rl/lecture1" element={<RL1 />} />
            <Route path="/rl/lecture2" element={<RL2 />} />
            <Route path="/rl/lecture3" element={<RL3 />} />
            <Route path="/rl/lecture4" element={<RL4 />} />
            <Route path="/rl/lecture5" element={<RL5 />} />
            <Route path="/rl/lecture6" element={<RL6 />} />
            <Route path="/rl/lecture7" element={<RL7 />} />
            <Route path="/rl/lecture8" element={<RL8 />} />
            <Route path="/reldb" element={<RelDB />} />
            <Route path="/reldb/lecture1" element={<RDB1 />} />
            <Route path="/reldb/lecture2" element={<RDB2 />} />
            <Route path="/reldb/lecture3" element={<RDB3 />} />
            <Route path="/reldb/lecture4" element={<RDB4 />} />
            <Route path="/reldb/lecture5" element={<RDB5 />} />
            <Route path="/reldb/lecture6" element={<RDB6 />} />
            <Route path="/reldb/lecture7" element={<RDB7 />} />
            <Route path="/xai" element={<XAI />} />
            <Route path="/xai/lecture1" element={<XAI1 />} />
            <Route path="/xai/lecture2" element={<XAI2 />} />
            <Route path="/xai/lecture3" element={<XAI3 />} />
            <Route path="/xai/lecture4" element={<XAI4 />} />
            <Route path="/xai/lecture5" element={<XAI5 />} />
            <Route path="/xai/lecture6" element={<XAI6 />} />
            <Route path="/xai/lecture7" element={<XAI7 />} />
            <Route path="/llm" element={<LLM />} />
            <Route path="/llm/lecture2" element={<LLM2 />} />
            <Route path="/llm/lecture3" element={<LLM3 />} />
            <Route path="/llm/lecture4" element={<LLM4 />} />
            <Route path="/llm/lecture5" element={<LLM5 />} />
            <Route path="/llm/lecture6" element={<LLM6 />} />
            <Route path="/llm/lecture7" element={<LLM7 />} />
            <Route path="/llm/lecture8" element={<LLM8 />} />
            <Route path="/llm/lecture9" element={<LLM9 />} />
            <Route path="/llm/lecture10" element={<LLM10 />} />
            <Route path="/llm/lecture11" element={<LLM11 />} />
            <Route path="/parallel" element={<Parallel />} />
            <Route path="/parallel/lecture1" element={<PAR1 />} />
            <Route path="/parallel/lecture2" element={<PAR2 />} />
            <Route path="/parallel/lecture3" element={<PAR3 />} />
            <Route path="/parallel/lecture4" element={<PAR4 />} />
            <Route path="/parallel/lecture5" element={<PAR5 />} />
            <Route path="/parallel/lecture6" element={<PAR6 />} />
            <Route path="/parallel/lecture7" element={<PAR7 />} />
            <Route path="/parallel/lecture8" element={<PAR8 />} />
            <Route path="/ai-ethics" element={<AIEthics />} />
            <Route path="/ai-ethics/lecture1" element={<ETH1 />} />
            <Route path="/ai-ethics/lecture2" element={<ETH2 />} />
            <Route path="/ai-ethics/lecture3" element={<ETH3 />} />
            <Route path="/ai-ethics/lecture4" element={<ETH4 />} />
            <Route path="/ai-ethics/lecture5" element={<ETH5 />} />
            <Route path="/ai-ethics/lecture6" element={<ETH6 />} />
            <Route path="/ai-ethics/lecture7" element={<ETH7 />} />
            <Route path="/ai-ethics/lecture8" element={<ETH8 />} />
            <Route path="/edge-ai" element={<EdgeAI />} />
            <Route path="/edge-ai/lecture1" element={<EDG1 />} />
            <Route path="/edge-ai/lecture2" element={<EDG2 />} />
            <Route path="/edge-ai/lecture3" element={<EDG3 />} />
            <Route path="/edge-ai/lecture4" element={<EDG4 />} />
            <Route path="/edge-ai/lecture5" element={<EDG5 />} />
            <Route path="/edge-ai/lecture6" element={<EDG6 />} />
            <Route path="/edge-ai/lecture7" element={<EDG7 />} />
            <Route path="/edge-ai/lecture8" element={<EDG8 />} />
            <Route path="/edge-ai/lecture9" element={<EDG9 />} />
            <Route path="/edge-ai/lecture10" element={<EDG10 />} />
            <Route path="/recommender" element={<RecommenderSystems />} />
            <Route path="/recommender/lecture1" element={<REC1 />} />
            <Route path="/recommender/lecture2" element={<REC2 />} />
            <Route path="/recommender/lecture3" element={<REC3 />} />
            <Route path="/recommender/lecture4" element={<REC4 />} />
            <Route path="/recommender/lecture5" element={<REC5 />} />
            <Route path="/recommender/lecture6" element={<REC6 />} />
            <Route path="/recommender/lecture7" element={<REC7 />} />
            <Route path="/recommender/lecture8" element={<REC8 />} />
            <Route path="/logic" element={<Logic />} />
            <Route path="/logic/lecture1" element={<LOG1 />} />
            <Route path="/logic/lecture2" element={<LOG2 />} />
            <Route path="/logic/lecture3" element={<LOG3 />} />
            <Route path="/logic/lecture4" element={<LOG4 />} />
            <Route path="/logic/lecture5" element={<LOG5 />} />
            <Route path="/logic/lecture6" element={<LOG6 />} />
            <Route path="/logic/lecture7" element={<LOG7 />} />
            <Route path="/speech-audio" element={<SpeechAudio />} />
            <Route path="/speech-audio/lecture1" element={<AUD1 />} />
            <Route path="/speech-audio/lecture2" element={<AUD2 />} />
            <Route path="/speech-audio/lecture3" element={<AUD3 />} />
            <Route path="/speech-audio/lecture4" element={<AUD4 />} />
            <Route path="/speech-audio/lecture5" element={<AUD5 />} />
            <Route path="/speech-audio/lecture6" element={<AUD6 />} />
            <Route path="/speech-audio/lecture7" element={<AUD7 />} />
            <Route path="/speech-audio/lecture8" element={<AUD8 />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
