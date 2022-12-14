import styled from "styled-components";

export const Container = styled.div`
  textarea {
    resize: none;
    height: 15rem;
    width: 100%;
    box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
    border-radius: 15px;
    margin-bottom: 2rem;
    padding: 1.5rem 2.5rem;
    color: ${({theme}) => theme.COLORS.DARK_600};
  }

  textarea:focus {
    outline: 1px solid ${({theme}) => theme.COLORS.PRIMARY};
    border-radius: 15px;
    box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
  }

  textarea:hover {
    border: 1px solid ${({theme}) => theme.COLORS.PRIMARY};
    border-radius: 15px;
    box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
  }

  textarea::placeholder {
    color: ${({theme}) => theme.COLORS.DARK_500};
  }

  @media (max-width: 700px) {
    margin-bottom: 1.4rem;

    textarea::placeholder {
      font-size: 1.5rem;
    }
  }
`