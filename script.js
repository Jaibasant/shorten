document.addEventListener('DOMContentLoaded', function() {
    const shortenerForm = document.querySelector('.shortener__container');
    const urlInput = document.getElementById('shortener');
    const errorElement = document.getElementById('error');
    const linksContainer = document.querySelector('.links__container');

    // Hide error message initially
    errorElement.style.display = 'none';

    // Input validation on typing
    urlInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            errorElement.style.display = 'none';
        }
    });

    // Form submission
    shortenerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const url = urlInput.value.trim();
        
        if (url === '') {
            errorElement.style.display = 'block';
            urlInput.focus();
            return;
        }
        
        // Validate URL format
        if (!isValidUrl(url)) {
            errorElement.style.display = 'block';
            errorElement.textContent = 'Please enter a valid URL (include http:// or https://)';
            return;
        }
        
        errorElement.style.display = 'none';
        
        // Simulate shortening (in a real app, you'd call an API here)
        simulateShortening(url);
    });

    // URL validation function
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    // Simulate URL shortening
    function simulateShortening(originalUrl) {
        // Show loading state
        const submitBtn = document.getElementById('submit__btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="btn-text">Shortening...</span> <span class="btn-icon"><i class="fas fa-spinner fa-spin"></i></span>';
        
        // Simulate API delay
        setTimeout(() => {
            // Generate a random short code
            const shortCode = Math.random().toString(36).substring(2, 8);
            const shortUrl = `skyl.ink/${shortCode}`;
            
            // Add to links container
            addLinkCard(originalUrl, shortUrl);
            
            // Reset form
            urlInput.value = '';
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span class="btn-text">Shorten</span> <span class="btn-icon"><i class="fas fa-paper-plane"></i></span>';
        }, 1500);
    }

    // Add link card to the container
    function addLinkCard(originalUrl, shortUrl) {
        const linkCard = document.createElement('div');
        linkCard.className = 'link';
        linkCard.innerHTML = `
            <div class="link-content">
                <div class="original-url">${truncateUrl(originalUrl, 50)}</div>
                <div class="short-url">${shortUrl}</div>
            </div>
            <button class="copy-btn">Copy</button>
        `;
        
        // Add animation
        linkCard.style.animation = 'fadeIn 0.5s ease-out';
        linksContainer.prepend(linkCard);
        
        // Add copy functionality
        const copyBtn = linkCard.querySelector('.copy-btn');
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(shortUrl).then(() => {
                copyBtn.textContent = 'Copied!';
                copyBtn.style.backgroundColor = 'var(--success)';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                    copyBtn.style.backgroundColor = 'var(--primary)';
                }, 2000);
            });
        });
    }

    // Helper function to truncate long URLs
    function truncateUrl(url, maxLength) {
        if (url.length > maxLength) {
            return url.substring(0, maxLength) + '...';
        }
        return url;
    }
});

// Add fadeIn animation for new links
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .link {
        background: white;
        padding: 1rem;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .link-content {
        flex: 1;
        margin-right: 1rem;
        overflow: hidden;
    }
    
    .original-url {
        color: #64748b;
        font-size: 0.9rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .short-url {
        color: var(--primary);
        font-weight: 500;
        margin-top: 0.25rem;
    }
    
    .copy-btn {
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 6px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .copy-btn:hover {
        background: #4338ca;
    }
`;
document.head.appendChild(style);