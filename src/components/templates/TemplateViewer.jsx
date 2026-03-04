import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Smartphone, Monitor } from 'lucide-react';

export default function TemplateViewer({ templateName, children }) {
    const [viewMode, setViewMode] = useState('desktop');
    const location = useLocation();
    
    // If raw=true in query, just render the child component natively for the iframe.
    if (location.search.includes('raw=true')) {
        return <>{children}</>;
    }

    const iframeSrc = `${import.meta.env.BASE_URL}${location.pathname.replace(/^\//, '')}?raw=true`;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#e5e5e5', overflow: 'hidden' }}>
            {/* Top Bar */}
            <div
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '8px 20px', background: '#1C1814', color: 'rgba(255,255,255,0.85)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)', zIndex: 9999, flexShrink: 0
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', width: '30%' }}>
                    <Link
                        to="/explore"
                        style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFD23F', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}
                    >
                        <ArrowLeft size={14} />
                        Back to Templates
                    </Link>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', width: '40%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', padding: '4px' }}>
                        <button
                            onClick={() => setViewMode('desktop')}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', fontSize: '12px', fontWeight: 600, border: 'none',
                                borderRadius: '100px', cursor: 'pointer', transition: 'all 0.2s',
                                background: viewMode === 'desktop' ? '#fff' : 'transparent',
                                color: viewMode === 'desktop' ? '#1C1814' : 'rgba(255,255,255,0.6)'
                            }}
                        >
                            <Monitor size={14} /> Desktop
                        </button>
                        <button
                            onClick={() => setViewMode('mobile')}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', fontSize: '12px', fontWeight: 600, border: 'none',
                                borderRadius: '100px', cursor: 'pointer', transition: 'all 0.2s',
                                background: viewMode === 'mobile' ? '#fff' : 'transparent',
                                color: viewMode === 'mobile' ? '#1C1814' : 'rgba(255,255,255,0.6)'
                            }}
                        >
                            <Smartphone size={14} /> Mobile
                        </button>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '30%', gap: '16px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.45)' }}>
                        Preview — <span style={{ color: '#fff' }}>{templateName}</span>
                    </span>
                    <Link
                        to="/contact"
                        style={{
                            display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 14px', fontSize: '12px', fontWeight: 600,
                            background: '#FF3D57', color: '#fff', textDecoration: 'none', borderRadius: '100px'
                        }}
                    >
                        Get This Built <ExternalLink size={12} />
                    </Link>
                </div>
            </div>

            {/* Viewer Area */}
            <div style={{ flex: 1, overflow: 'auto', padding: viewMode === 'mobile' ? '40px 0' : '0', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <div
                    style={{
                        width: viewMode === 'mobile' ? '375px' : '100%',
                        height: viewMode === 'mobile' ? '812px' : '100%',
                        background: '#fff',
                        borderRadius: viewMode === 'mobile' ? '40px' : '0',
                        boxShadow: viewMode === 'mobile' ? '0 25px 50px -12px rgba(0,0,0,0.25)' : 'none',
                        border: viewMode === 'mobile' ? '12px solid #1C1814' : 'none',
                        transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
                        overflow: 'hidden',
                        position: 'relative',
                        flexShrink: 0
                    }}
                >
                    <iframe 
                        src={iframeSrc} 
                        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} 
                        title={`Preview of ${templateName}`}
                    />
                </div>
            </div>
        </div>
    );
}
