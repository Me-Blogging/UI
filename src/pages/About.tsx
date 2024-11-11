export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-foreground">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <img
            alt="Profile"
            className="rounded-full object-cover"
            src="src/assets/photo_2024-11-04_21-27-53.jpg" // Update with your image path
            style={{
              aspectRatio: "128/128",
              objectFit: "cover",
            }}
          />
        </div>
        
        <h1 className="text-4xl font-bold mb-8">
          Hey, I am Kirubel Wondwoson!
        </h1>
        
        <p className="text-lg leading-relaxed">
          Hey there! 👋 I&apos;m Kirubel, a believer and creative developer. 
          I&apos;m passionate about creating robust web applications and exploring new technologies. With experience in modern frameworks and API development, I strive to deliver quality solutions that meet user needs. Let&apos;s collaborate and build something amazing together! 😊 ✨
        </p>
      </div>
    </div>
  )
}