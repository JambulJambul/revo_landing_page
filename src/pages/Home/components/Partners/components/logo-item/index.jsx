const LogoItem = ({ href, alt, src }) => {
    return (
        <div className="mx-4 md:mx-8"> 
            <a href={href} target="_blank" rel="noopener noreferrer">
                <img className='object-contain w-24 md:w-48' src={src} alt={alt} />
            </a>
        </div>
    );
};

export default LogoItem;