import React from 'react'

const Home = () => {
    return (
        <main style={{
            minHeight: '100vh',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
            padding: '2rem',
            gap: '1.5rem'
        }}>
            <div>
                <h1 style={{ fontSize: '4rem', margin: 0 }}>🎉 Welcome Home! 🎉</h1>
                <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
                    You are authenticated and ready to rock.
                </p>
            </div>
            <div>
                <img
                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN29nbjN5azI3dDJvbGpscHdwcmY3dHg0NW5haXFseDJwdzg5N2cybiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TjSPQgowhhJdHgvnwA/giphy.gif"
                    alt="Funny celebration gif"
                    style={{
                        maxWidth: '90%',
                        width: '420px',
                        borderRadius: '24px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.18)'
                    }}
                />
            </div>
        </main>
    )
}

export default Home
