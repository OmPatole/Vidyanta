import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function PreviewBar({ templateName }) {
    return (
        <div
            className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-5 py-2.5 text-xs font-semibold"
            style={{
                background: '#1C1814',
                color: 'rgba(255,255,255,0.85)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
        >
            <Link
                to="/explore"
                className="flex items-center gap-1.5 transition-colors hover:text-white"
                style={{ color: '#FFD23F', textDecoration: 'none' }}
            >
                <ArrowLeft size={13} />
                Back to Templates
            </Link>

            <span style={{ color: 'rgba(255,255,255,0.45)' }}>
                Preview — <span style={{ color: '#fff' }}>{templateName}</span>
            </span>

            <Link
                to="/contact"
                className="flex items-center gap-1.5 px-3 py-1 rounded-full transition-all hover:scale-105"
                style={{ background: '#FF3D57', color: '#fff', textDecoration: 'none' }}
            >
                Get This Built <ExternalLink size={11} />
            </Link>
        </div>
    );
}

