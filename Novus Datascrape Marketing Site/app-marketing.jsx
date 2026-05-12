/* global React, Toolbar, Hero, ConsoleFrame, SourcesStrip, Pillars, HowWeWork, Coverage, Delivery, BuiltForTheDesk, FinalCTA, Footer */

function App() {
  const [t, setT] = useTweaks(/*EDITMODE-BEGIN*/{
    "accent": "#0288d1",
    "headline": "Find every new dataset · <em>before your competitors do.</em>",
    "subhead": "Novus Datascrape continuously monitors 47 sources of alternative data \u2014 vendors, news, marketplaces, social \u2014 and surfaces what's new the moment it appears. Built for the analysts who pick the signals.",
    "density": "spacious"
  }/*EDITMODE-END*/);

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--nds-primary-600', t.accent);
    // derive 700/400
    root.style.setProperty('--nds-primary-700', t.accent);
    const sections = document.querySelectorAll('.m-section');
    sections.forEach(s => {
      s.style.paddingTop = t.density === 'dense' ? '64px' : '96px';
      s.style.paddingBottom = t.density === 'dense' ? '64px' : '96px';
    });
  }, [t.accent, t.density]);

  return (
    <div className="m-page">
      <Toolbar/>
      <Hero headline={t.headline} subhead={t.subhead}/>
      <ConsoleFrame/>
      <SourcesStrip/>
      <Pillars/>
      <HowWeWork/>
      <Coverage/>
      <Delivery/>
      <BuiltForTheDesk/>
      <FinalCTA/>
      <Footer/>

      <TweaksPanel title="Page tweaks">
        <TweakSection title="Hero copy">
          <TweakText label="Headline (HTML)" value={t.headline} onChange={v => setT('headline', v)} multiline/>
          <TweakText label="Subhead" value={t.subhead} onChange={v => setT('subhead', v)} multiline/>
        </TweakSection>
        <TweakSection title="Theme">
          <TweakColor label="Accent" value={t.accent} onChange={v => setT('accent', v)} options={['#0288d1', '#0277bd', '#00838f', '#1e88e5', '#37474f']}/>
          <TweakRadio label="Section density" value={t.density} onChange={v => setT('density', v)} options={[{value:'spacious', label:'Spacious'}, {value:'dense', label:'Dense'}]}/>
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
