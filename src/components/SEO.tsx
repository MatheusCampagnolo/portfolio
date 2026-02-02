import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    name?: string;
    type?: string;
    image?: string;
    url?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    name = 'Matheus Messias',
    type = 'website',
    image,
    url
}) => {
    const siteUrl = window.location.origin;
    const currentUrl = url || window.location.href;
    const socialImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : undefined;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title} | Matheus Messias</title>
            <meta name='description' content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {socialImage && <meta property="og:image" content={socialImage} />}
            <meta property="og:url" content={currentUrl} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {socialImage && <meta name="twitter:image" content={socialImage} />}
        </Helmet>
    );
};
