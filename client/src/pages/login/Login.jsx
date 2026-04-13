import { Lock, Eye, EyeOff, Fuel, ShieldCheck, User } from 'lucide-react';
import { useLogin } from './useLogin';

export const Login = () => {
  const {
    changeValue,
    user,
    submit,
    error,
    isLogging,
    setShowPassword,
    showPassword,
  } = useLogin();

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-[#0b1a09] px-4 py-10 relative overflow-hidden'>
      {/* Radial glow */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <div className='w-175 h-175 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.08)_0%,transparent_70%)]' />
      </div>

      {[500, 800, 1100].map((size, i) => (
        <div
          key={i}
          className='absolute rounded-full border border-[rgba(201,162,39,0.06)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse'
          style={{
            width: size,
            height: size,
            animationDelay: `${i * 2}s`,
            animationDuration: '9s',
          }}
        />
      ))}

      <div className='relative z-10 w-full max-w-110 bg-white/5 border border-[rgba(201,162,39,0.15)] rounded-sm backdrop-blur-sm px-10 py-12 sm:px-8 sm:py-10'>
        {/* Logo */}
        <div className='flex flex-col items-center mb-9'>
          <div className='w-15 h-15 border-2 border-[#c9a227] rounded-sm flex items-center justify-center text-[#c9a227] mb-3 relative'>
            <div className='absolute inset-1 border border-[rgba(201,162,39,0.25)] rounded-xs' />
            <Fuel size={22} strokeWidth={1.5} />
          </div>
          <p
            className='text-[#f5f0e8] text-lg font-black tracking-[4px] uppercase'
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            OMW
          </p>
          <p className='text-[10px] tracking-[3px] uppercase text-white/30 font-light mt-1'>
            On My Way
          </p>
        </div>

        <h1
          className='text-[#f5f0e8] text-[1.75rem] font-bold text-center mb-1'
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Welcome back
        </h1>
        <p className='text-white/40 text-[13px] font-light text-center mb-7'>
          Sign in to access your account
        </p>

        <div className='w-full h-px bg-[rgba(201,162,39,0.12)] mb-7' />

        {/* Email field */}
        {error && (
          <div className='py-3 flex w-full justify-center'>
            <p className='text-xs font-medium italic text-red-600'>{error}</p>
          </div>
        )}
        <div className='mb-5'>
          <label className='block text-[11px] tracking-[2px] uppercase text-white/45 font-medium mb-2'>
            Username
          </label>
          <div className='relative flex items-center'>
            <span className='absolute left-3.5 text-[rgba(201,162,39,0.5)] flex items-center pointer-events-none'>
              <User size={15} strokeWidth={1.5} />
            </span>
            <input
              placeholder='Your username'
              value={user.username}
              onChange={(e) => changeValue('username', e.target.value)}
              className='w-full bg-white/4 border border-white/10 rounded-sm text-[#f5f0e8] text-sm font-light pl-10 pr-4 py-3.5 outline-none placeholder:text-white/20 focus:border-[rgba(201,162,39,0.55)] focus:bg-[rgba(201,162,39,0.04)] transition-all duration-200'
            />
          </div>
        </div>

        {/* Password field */}
        <div className='mb-3'>
          <label className='block text-[11px] tracking-[2px] uppercase text-white/45 font-medium mb-2'>
            Password
          </label>
          <div className='relative flex items-center'>
            <span className='absolute left-3.5 text-[rgba(201,162,39,0.5)] flex items-center pointer-events-none'>
              <Lock size={15} strokeWidth={1.5} />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              autoComplete='current-password'
              placeholder='••••••••••••'
              value={user.password}
              onChange={(e) => changeValue('password', e.target.value)}
              className='w-full bg-white/4 border border-white/10 rounded-sm text-[#f5f0e8] text-sm font-light pl-10 pr-12 py-3.5 outline-none placeholder:text-white/20 focus:border-[rgba(201,162,39,0.55)] focus:bg-[rgba(201,162,39,0.04)] transition-all duration-200'
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3.5 text-white/30 hover:text-[#c9a227] transition-colors duration-200 flex items-center'
            >
              {showPassword ? (
                <EyeOff size={15} strokeWidth={1.5} />
              ) : (
                <Eye size={15} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        <button
          type='button'
          disabled={isLogging}
          onClick={submit}
          className={`w-full text-[#0b1a09] text-[12px] font-medium tracking-[3px] uppercase py-3.75 rounded-sm transition-all duration-200 mb-4
    ${
      isLogging
        ? 'bg-[#c9a227]/70 cursor-not-allowed opacity-70 pointer-events-none'
        : 'bg-[#c9a227] hover:bg-[#d4b03a] active:scale-[0.99] cursor-pointer'
    }`}
        >
          {isLogging ? 'Signing In...' : 'Sign In'}
        </button>
      </div>
    </div>
  );
};
