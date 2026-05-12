/* global React, W1, W2, W3, W4, W5, W6, DesignCanvas, DCSection, DCArtboard, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakSelect, TweakToggle, TweakColor, TweakText */

function App() {
  const [t, setT] = useTweaks(/*EDITMODE-BEGIN*/{
    "accent": "#0288d1",
    "showAnnotations": true,
    "paper": "#fbfaf6"
  }/*EDITMODE-END*/);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--paper', t.paper);
    document.body.classList.toggle('hide-anno', !t.showAnnotations);
  }, [t.accent, t.paper, t.showAnnotations]);

  return (
    <>
      <DesignCanvas title="Novus Datascrape — landing-page wireframes" subtitle="6 low-fi directions across the tone spectrum. Click any to focus.">
        <DCSection id="quiet" title="Quiet · institutional" subtitle="FactSet-quiet, facts only">
          <DCArtboard id="w1" label="V1 · Stoic datasheet" width={1200} height={1620}><W1/></DCArtboard>
          <DCArtboard id="w5" label="V5 · Self-referential card" width={1200} height={1820}><W5/></DCArtboard>
        </DCSection>
        <DCSection id="default" title="Calm-confident · design-system default" subtitle="Console-first, structured">
          <DCArtboard id="w2" label="V2 · Console-first" width={1200} height={1820}><W2/></DCArtboard>
          <DCArtboard id="w3" label="V3 · Asymmetric / timeline" width={1200} height={1500}><W3/></DCArtboard>
        </DCSection>
        <DCSection id="warm" title="Warmer · more narrative" subtitle="Story-driven, expressive">
          <DCArtboard id="w4" label="V4 · Narrative / before-after" width={1200} height={1660}><W4/></DCArtboard>
          <DCArtboard id="w6" label="V6 · Bold / expressive" width={1200} height={1740}><W6/></DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Wireframe tweaks">
        <TweakSection title="Theme">
          <TweakColor label="Accent" value={t.accent} onChange={v => setT('accent', v)} options={['#0288d1', '#2a3540', '#2e7d32', '#ef6c00', '#7b1fa2']}/>
          <TweakColor label="Paper" value={t.paper} onChange={v => setT('paper', v)} options={['#fbfaf6', '#ffffff', '#f4f7f9', '#f4f1e8']}/>
        </TweakSection>
        <TweakSection title="Display">
          <TweakToggle label="Show margin annotations" value={t.showAnnotations} onChange={v => setT('showAnnotations', v)}/>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
