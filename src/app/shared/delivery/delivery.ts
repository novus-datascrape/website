import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery',
  template: `
    <section class="m-section m-bg-surface" id="delivery">
      <div class="m-container">
        <div class="m-section-head">
          <span class="m-tag">Delivery</span>
          <h2>A feed, not another login.</h2>
          <p>Use the console if you want. Or pipe the catalog straight into your eval pipeline — webhooks for the moment something lands, batch exports for everything else.</p>
        </div>
        <div class="m-delivery">
          <div>
            <span class="m-tag realtime-tag">Real-time webhooks</span>
            <h2 class="delivery-title">The moment it appears, your stack knows.</h2>
            <p class="delivery-body">Subscribe a webhook to your sectors and Novus posts a normalised payload the instant a new dataset clears classification. Your eval pipeline runs before your competitors have even opened their inbox.</p>
            <div class="methods">
              @for (method of methods; track method.name) {
                <div class="method">
                  <span class="material-icons">{{ method.icon }}</span>
                  <div class="text">
                    <span class="name">{{ method.name }}</span>
                    <span class="desc">{{ method.desc }}</span>
                  </div>
                </div>
              }
            </div>
          </div>
          <div class="m-codeblock">
            <div class="cb-bar">
              <span class="dot"></span><span class="dot"></span><span class="dot"></span>
              <span class="label">webhook · POST /your-endpoint</span>
            </div>
            <pre>{{webhookPayload}}</pre>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .m-section { padding: 96px 0; }
    .m-bg-surface { background: var(--nds-surface); border-top: 1px solid var(--nds-line); border-bottom: 1px solid var(--nds-line); }
    .m-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .m-section-head { text-align: left; margin-bottom: 48px; max-width: 720px; }
    .m-section-head h2 {
      font: 300 40px/1.15 var(--nds-font-sans);
      color: var(--nds-slate-900);
      margin: 14px 0 12px;
      letter-spacing: -0.3px;
    }
    .m-section-head p { font: var(--nds-text-lead); color: var(--nds-slate-700); margin: 0; }
    .m-tag {
      display: inline-block;
      font: var(--nds-text-cap);
      color: var(--nds-slate-600);
      text-transform: uppercase;
      letter-spacing: var(--nds-tr-cap);
      background: var(--nds-surface);
      border: 1px solid var(--nds-line-strong);
      border-radius: var(--nds-radius-chip);
      padding: 4px 10px;
    }
    .realtime-tag { background: #e1f5fe; border-color: #b3e5fc; color: #0277bd; }
    .m-delivery {
      background: var(--nds-surface);
      border: 1px solid var(--nds-line);
      border-radius: var(--nds-radius-card);
      box-shadow: var(--nds-shadow-card);
      padding: 48px;
      display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px;
      align-items: center;
    }
    .delivery-title {
      font: 300 36px/1.15 var(--nds-font-sans);
      color: var(--nds-slate-900);
      margin: 14px 0 14px;
      letter-spacing: -0.3px;
    }
    .delivery-body { font: var(--nds-text-lead); color: var(--nds-slate-700); margin: 0 0 24px; }
    .methods { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .method {
      display: flex; align-items: center; gap: 10px;
      padding: 12px 14px;
      border: 1px solid var(--nds-line-strong);
      border-radius: var(--nds-radius-control);
      background: var(--nds-surface-alt);
    }
    .method .material-icons { color: var(--nds-primary-600); font-size: 20px; }
    .method .name { font: 500 14px/1 var(--nds-font-sans); color: var(--nds-slate-900); }
    .method .desc { font: 400 12px/1.4 var(--nds-font-sans); color: var(--nds-slate-500); margin-top: 3px; }
    .method .text { display: flex; flex-direction: column; }
    .m-codeblock {
      background: #263238;
      color: #cfd8dc;
      border-radius: var(--nds-radius-card);
      padding: 24px;
      font: 400 13px/1.65 'SF Mono', Menlo, Consolas, monospace;
      overflow: hidden;
    }
    .m-codeblock pre { margin: 0; white-space: pre-wrap; word-break: break-word; }
    .cb-bar {
      display: flex; align-items: center; gap: 6px;
      margin: -8px -8px 14px;
      padding: 0 0 12px;
      border-bottom: 1px solid rgba(255,255,255,.08);
    }
    .cb-bar .dot { width: 10px; height: 10px; border-radius: 50%; background: #455a64; }
    .cb-bar .label {
      font: 500 11px/1 var(--nds-font-sans); color: #78909c;
      margin-left: 8px; letter-spacing: 0.3px; text-transform: uppercase;
    }

    @media (max-width: 960px) {
      .m-delivery { grid-template-columns: 1fr; gap: 32px; padding: 32px; }
    }
  `]
})
export class DeliveryComponent {
  methods = [
    { icon: 'webhook', name: 'Webhook', desc: 'POST per new dataset · < 1 min' },
    { icon: 'api', name: 'REST API', desc: 'Filter, paginate, replay' },
    { icon: 'cloud_download', name: 'Daily CSV / JSON', desc: 'S3 or SFTP drop' },
    { icon: 'table_view', name: 'Console', desc: 'Browse, filter, export' },
  ];

  webhookPayload = `{
  "event":    "dataset.new",
  "latency_s": 724,
  "dataset": {
    "id":        "ds_a91b…",
    "name":      "Container Throughput — APAC",
    "vendor":    "PortWatch",
    "source":    "bing_news",
    "sectors":   ["shipping", "commodities"],
    "frequency": "daily",
    "formats":   ["csv", "api"],
    "citation":  "https://portwatch.io/…",
    "first_seen": "2026-05-12T09:47:31Z"
  }
}`;
}
