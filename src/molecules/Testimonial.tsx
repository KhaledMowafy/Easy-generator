import userImage from '../assets/user.webp'

export const Testimonial = ()=> {
  return (
    <div className="max-w-md text-center px-8 text-white">
      <p className="text-lg leading-relaxed mb-6">
        <span className="text-4xl font-serif">“</span>
        This is a cool full-stack project, you should hire Khaled Mowafy!
      </p>
      <div className="flex items-center justify-center gap-4">
        <img src={userImage} alt="User" className="h-12 w-12 rounded-full object-cover" />
        <div className="text-left">
          <p className="font-semibold">Jan Kees de Jager</p>
          <p className="text-sm">Co-Founder and President</p>
        </div>
      </div>
    </div>
  );
};