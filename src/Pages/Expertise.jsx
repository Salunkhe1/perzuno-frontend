import React from "react"; 
import "./Expertise.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Container, Row, Col } from 'react-bootstrap';

export function ExportiseComponent(){

const items = [
{
icon: '📍',
title: 'AI & MLOps',
text: 'Production-grade pipelines and automation.'
},
{
icon: '✳️',
title: 'Blockchain & Security',
text: 'Smart contracts and decentralized systems.'
},
{
icon: '🍎',
title: 'Cloud & DevOps',
text: 'Cloud-native architecture, CI/CD, and scaling.'
},
{
icon: '🤖',
title: 'Mobile Apps',
text: 'Cross-platform, lightning-fast mobile apps.'
},
{
icon: '🌐',
title: 'Web & APIs',
text: 'Modern full-stack web systems built to scale.'
}
];


return (
<div style={{ minHeight: '100vh', background: '#0f172a', color: 'white', display: 'flex', alignItems: 'center' }}>
<Container>
<h1 className="text-center mb-5" style={{ fontSize: '2.8rem', fontWeight: '600' }}>Our Expertise</h1>



<Row className="g-4 justify-content-center">
{items.map((item, index) => (
<Col key={index} xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center">
<Card
style={{
width: '100%',
maxWidth: '300px',
background: 'rgba(255,255,255,0.05)',
backdropFilter: 'blur(6px)',
borderRadius: '16px',
padding: '25px',
transition: '0.3s',
border: '1px solid rgba(255,255,255,0.08)',

}}
className="text-center shadow-sm expertise-card"
>
<div style={{ fontSize: '36px', color: '#a78bfa' }}>{item.icon}</div>
<h4 className="mt-3">{item.title}</h4>
<p style={{ color: '#cbd5e1' }}>{item.text}</p>
</Card>
</Col>
))}
</Row>
</Container>


{/* Hover effect */}
<style>{`
.expertise-card:hover {
transform: translateY(-8px);
background: rgba(255, 255, 255, 0.12) !important;
}
`}</style>
</div>
);

};
